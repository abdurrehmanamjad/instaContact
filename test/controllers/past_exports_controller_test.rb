require 'test_helper'

class PastExportsControllerTest < ActionController::TestCase
  setup do
    @past_export = past_exports(:one)
  end

  test "should get index" do
    get :index
    assert_response :success
    assert_not_nil assigns(:past_exports)
  end

  test "should get new" do
    get :new
    assert_response :success
  end

  test "should create past_export" do
    assert_difference('PastExport.count') do
      post :create, past_export: { content: @past_export.content, user_id: @past_export.user_id }
    end

    assert_redirected_to past_export_path(assigns(:past_export))
  end

  test "should show past_export" do
    get :show, id: @past_export
    assert_response :success
  end

  test "should get edit" do
    get :edit, id: @past_export
    assert_response :success
  end

  test "should update past_export" do
    patch :update, id: @past_export, past_export: { content: @past_export.content, user_id: @past_export.user_id }
    assert_redirected_to past_export_path(assigns(:past_export))
  end

  test "should destroy past_export" do
    assert_difference('PastExport.count', -1) do
      delete :destroy, id: @past_export
    end

    assert_redirected_to past_exports_path
  end
end
